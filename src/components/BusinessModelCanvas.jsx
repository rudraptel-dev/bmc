import React, { useEffect, useRef, useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";
import CompanyInfo from "./CompanyInfo";
import { toPng } from "html-to-image";
import API from "../api/api";
import { renderShareButtons } from "../../utils/shareButton";
import { Header } from "./Header";
import { Loading } from "./Loading";
import { CanvasSectionGrid } from "./CanvasSectionGrid";

export default function BusinessModelCanvas() {
  const [canvasData, setCanvasData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [designedFor, setDesignedFor] = useState("");
  const [designedby, setDesignedBy] = useState("");
  const [version, setVersion] = useState("");
  const [date, setDate] = useState("");
  const elementRef = useRef(null);
  const pdfDownload = useRef();
  const { id } = useParams();
  const { id2 } = useParams();
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await API.post(
          "/api/submit",
          { id },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data && response.data.data[0]) {
          const responseData = response.data.data[0];
          setDesignedFor(responseData.designedfor || "");
          setDesignedBy(responseData.designedby || "");
          setVersion(responseData.version || "");
          setDate(responseData.date || "");
        }
        if (
          response.data &&
          response.data &&
          response.data.data[0] &&
          response.data.data[0].data
        ) {
          const parsedData = JSON.parse(response.data.data[0].data);
          setCanvasData(parsedData);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load canvas data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleDownloadPDF = async () => {
    try {
      document.getElementById("download-image-button").style.display = "none";
      document.getElementById("download-pdf-button").style.display = "none";

      const input = pdfDownload.current;
      const originalHeight = input.style.height;
      input.style.height = "1200px";

      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        logging: false,
        height: input.scrollHeight,
        windowHeight: input.scrollHeight,
        scrollY: -window.scrollY,
        onclone: (document) => {
          const clonedElement = document.querySelector("[ref=pdfDownload]");
          if (clonedElement) {
            clonedElement.style.height = "1200px";
          }
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("business-model-canvas.pdf");

      input.style.height = originalHeight;
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      document.getElementById("download-image-button").style.display =
        "inline-block";
      document.getElementById("download-pdf-button").style.display =
        "inline-block";
    }
  };

  const handleDownloadImage = async () => {
    try {
      document.getElementById("download-image-button").style.display = "none";
      document.getElementById("download-pdf-button").style.display = "none";

      const dataUrl = await toPng(elementRef.current, {
        cacheBust: false,
        height: elementRef.current.scrollHeight,
        width: elementRef.current.scrollWidth,
        style: {
          transform: "scale(1)",
        },
      });

      const link = document.createElement("a");
      link.download = "business-model-canvas.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error generating image:", err);
    } finally {
      document.getElementById("download-image-button").style.display =
        "inline-block";
      document.getElementById("download-pdf-button").style.display =
        "inline-block";
    }
  };

  const renderDataItems = (sectionData) => {
    if (!sectionData || !sectionData.items) return null;
    return (
      <>
        {sectionData.items.map((item, index) => (
          <Typography key={index} sx={{ fontSize: "0.875rem", mb: 1 }}>
            • {item}
          </Typography>
        ))}
      </>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Box
      ref={elementRef}
      sx={{ minHeight: "100vh", backgroundColor: "grey.100", p: 1 }}
    >
      <Container
        ref={pdfDownload}
        sx={{
          minHeight: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        maxWidth={false}
      >
        <Container maxWidth={false}>
          <Header
            designedFor={designedFor}
            setDesignedFor={setDesignedFor}
            designedby={designedby}
            setDesignedBy={setDesignedBy}
            version={version}
            setVersion={setVersion}
            date={date}
            setDate={setDate}
            handleDownloadImage={handleDownloadImage}
            handleDownloadPDF={handleDownloadPDF}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "flex-end" },
              padding: { xs: "3px", sm: "5px", md: "8px" },
              width: "100%",
            }}
          >
            {renderShareButtons({ shareUrl })}
          </Box>
          <CanvasSectionGrid
            canvasData={canvasData}
            renderDataItems={renderDataItems}
          />
        </Container>
        <Container
          sx={{
            minHeight: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
          maxWidth={false}
        >
          <CompanyInfo id2={id2} />
        </Container>
      </Container>
    </Box>
  );
}
