import CompanyInfo from "../src/components/CompanyInfo";

export const PDFCanvas = ({ canvasData, renderDataItems }) => {
    return (
      <Box sx={{ 
        width: '1200px', 
        backgroundColor: 'grey.100',
        p: 1,
        visibility: 'hidden',
        position: 'absolute',
        left: '-9999px'
      }}>
        <Container maxWidth={false}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: { xs: 2, sm: 2, md: 0 },
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
            alignItems: { xs: 'stretch', sm: 'stretch', md: 'center' },
            mb: 4 
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold',
              textAlign: { xs: 'center', sm: 'center', md: 'left' },
              mb: { xs: 2, sm: 2, md: 0 }
            }}
          >
            Business Model Canvas
          </Typography>
          
          <Grid2 
            container 
            spacing={1} 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
              alignItems: 'center',
              width: { xs: '100%', sm: '100%', md: 'auto' },
              gap: { xs: 1, sm: 1, md: 0 }
            }}
          >
            <Grid2 item xs={12} sm={6} md={2}>
              <TextField
                id="Designed for:"
                label="Designed for:"
                variant="outlined"
                fullWidth
                sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
              />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={2}>
              <TextField 
                fullWidth
                variant="outlined"
                id="Designed by::"
                label="Designed by:"
                sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
              />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={2.2}>
              <TextField 
                fullWidth 
                variant="outlined" 
                type="date"
                sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
              />
            </Grid2>
            <Grid2 item xs={12} sm={6} md={2}>
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Version" 
                id='Version'
                sx={{ minWidth: { xs: '100%', sm: '200px', md: '100px' } }}
              />
            </Grid2>
          </Grid2>
          
          <Button 
            id="download-pdf-button"
            variant="contained" 
            color="primary" 
            onClick={handleDownloadPDF} 
            sx={{
              margin: { xs: '10px auto', sm: '10px auto', md: '2px' },
              width: { xs: '100%', sm: 'auto', md: 'auto' }
            }}
          >
            Download PDF
          </Button>
        </Box>

        <Grid2 container sx={{border: "5px solid black"}}>
          {/* Top Row */}
          <Grid2 item xs={12} md={2.4} sx={{borderBottom: "none"}}>
            <CanvasSection title="Key Partners" icon={LinkIcon}>
              {canvasData && renderDataItems(canvasData.keyPartners)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={2.4} sx={{border: "2px solid black", borderTop: "none"}}>
            <CanvasSection title="Key Activities" icon={CheckBoxIcon}>
              {canvasData && renderDataItems(canvasData.keyActivities)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={2.4} sx={{borderBottom: "none"}}>
            <CanvasSection title="Value Propositions" icon={GradeIcon}>
              {canvasData && renderDataItems(canvasData.valueProposition)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={2.4} sx={{border: "2px solid black", borderTop: "none"}}>
            <CanvasSection title="Customer Relationships" icon={PeopleAltIcon}>
              {canvasData && renderDataItems(canvasData.customerRelationships)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={2.4} sx={{borderBottom: "none"}}>
            <CanvasSection title="Customer Segments" icon={PeopleAltIcon}>
              {canvasData && renderDataItems(canvasData.customerSegments)}
            </CanvasSection>
          </Grid2>

          {/* Middle Row */}
          <Grid2 item xs={12} md={2.4} mdOffset={2.4}>
          </Grid2>

          <Grid2 item xs={12} md={2.4} mdOffset={2.4} sx={{border: "2px solid black", borderTop: "none", borderBottom: "none"}}>
            <CanvasSection title="Key Resources" icon={BusinessCenterIcon}>
              {canvasData && renderDataItems(canvasData.keyResources)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={2.4} mdOffset={2.4}>
          </Grid2>

          <Grid2 item xs={12} md={2.4} mdOffset={2.4} sx={{border: "2px solid black", borderTop: "none", borderBottom: "none"}}>
            <CanvasSection title="Channels" icon={LocalShippingIcon}>
              {canvasData && renderDataItems(canvasData.channels)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={2.4} mdOffset={2.4}>
          </Grid2>

          {/* Bottom Row */}
          <Grid2 item xs={12} md={6} sx={{borderTop: "2px solid black", borderRight: "2px solid black"}}>
            <CanvasSection title="Cost Structure" icon={AccountBalanceWalletIcon}>
              {canvasData && renderDataItems(canvasData.costStructure)}
            </CanvasSection>
          </Grid2>

          <Grid2 item xs={12} md={6} sx={{borderTop: "2px solid black"}}>
            <CanvasSection title="Revenue Streams" icon={AttachMoneyIcon}>
              {canvasData && renderDataItems(canvasData.revenueStreams)}
            </CanvasSection>
          </Grid2>
        </Grid2>
      </Container>
      <Container maxWidth={false}>
        <CompanyInfo companyData={companyData} />
      </Container>
      </Box>
    );
  };