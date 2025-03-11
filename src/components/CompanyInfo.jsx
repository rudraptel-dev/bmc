import React ,{useState,useEffect} from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import axios from 'axios';
import API from '../api/api';

const CompanyInfo = ({ id2 }) => {
  const [companyData,setCompanyData] = useState(null)
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await API.post('/api/submit/user', { id2 }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
  
        if (response.data) {
          const parsedData = response.data.data
          console.log(parsedData)
          setCompanyData(parsedData);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
  
    if (id2) {
      fetchData2();
    }
  }, [id2]);
  if (!companyData || !Array.isArray(companyData) || companyData.length === 0) return null;
  const company = companyData[0];
  if (!company) return null;  


  const parseJsonString = (jsonString) => {
    try {
      return typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    } catch (e) {
      return null;
    }
  };

  const name = parseJsonString(company.name);
  const domain = parseJsonString(company.domain);
  const description = parseJsonString(company.description);
  const logos = parseJsonString(company.logos);

  const findValidLogo = () => {
    if (!logos || !Array.isArray(logos)) return null;
    
    const lightLogo = logos.find(logo => logo.theme === 'dark' && logo.type === 'logo');
    if (lightLogo && lightLogo.formats && lightLogo.formats.length > 0) {
      const svgFormat = lightLogo.formats.find(format => format.format === 'svg');
      const pngFormat = lightLogo.formats.find(format => format.format === 'png');
      return svgFormat?.src || pngFormat?.src || lightLogo.formats[0].src;
    }
    return null;
  };

  const logoUrl = findValidLogo();

  if (!name && !domain && !description && !logoUrl) return null;

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        mt: 4, 
        p: 3,
        backgroundColor: 'white',
        borderRadius: 2
      }}
    >
      <Grid container spacing={3} alignItems="center">
        {logoUrl && (
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <img 
              src={logoUrl} 
              alt={name || 'Company logo'} 
              style={{ 
                maxWidth: '200px',
                maxHeight: '100px',
                objectFit: 'contain',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </Grid>
        )}
        
        <Grid item xs={12} md={logoUrl ? 9 : 12}>
          <Box>
            {name && (
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                {name}
              </Typography>
            )}
            
            {domain && (
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  mb: 2,
                  color: 'text.secondary'
                }}
              >
                {domain}
              </Typography>
            )}
            
            {description && (
              <Typography 
                variant="body1"
                sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.6
                }}
              >
                {description}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompanyInfo;