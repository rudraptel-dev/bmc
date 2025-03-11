import React from 'react';
import { 
   Grid,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LinkIcon from '@mui/icons-material/Link';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import GradeIcon from '@mui/icons-material/Grade';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { CanvasSection } from '../../utils/canvasSection';

export const CanvasSectionGrid = ({ canvasData ,renderDataItems}) => {
    return (
      <Grid container sx={{border: "5px solid black"}}>
        {/* Top Row */}
        <Grid item xs={12} md={2.4} sx={{borderBottom: "none"}}>
          <CanvasSection title="Key Partners" icon={LinkIcon}>
            {canvasData && renderDataItems(canvasData.keyPartners)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={2.4} sx={{border: "2px solid black", borderTop: "none"}}>
          <CanvasSection title="Key Activities" icon={CheckBoxIcon}>
            {canvasData && renderDataItems(canvasData.keyActivities)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={2.4} sx={{borderBottom: "none"}}>
          <CanvasSection title="Value Propositions" icon={GradeIcon}>
            {canvasData && renderDataItems(canvasData.valueProposition)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={2.4} sx={{border: "2px solid black", borderTop: "none"}}>
          <CanvasSection title="Customer Relationships" icon={PeopleAltIcon}>
            {canvasData && renderDataItems(canvasData.customerRelationships)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={2.4} sx={{borderBottom: "none"}}>
          <CanvasSection title="Customer Segments" icon={PeopleAltIcon}>
            {canvasData && renderDataItems(canvasData.customerSegments)}
          </CanvasSection>
        </Grid>
  
        {/* Middle Row */}
        <Grid item xs={12} md={2.4} mdOffset={2.4}>
        </Grid>
  
        <Grid item xs={12} md={2.4} mdOffset={2.4} sx={{border: "2px solid black", borderTop: "none", borderBottom: "none"}}>
          <CanvasSection title="Key Resources" icon={BusinessCenterIcon}>
            {canvasData && renderDataItems(canvasData.keyResources)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={2.4} mdOffset={2.4}>
        </Grid>
  
        <Grid item xs={12} md={2.4} mdOffset={2.4} sx={{border: "2px solid black", borderTop: "none", borderBottom: "none"}}>
          <CanvasSection title="Channels" icon={LocalShippingIcon}>
            {canvasData && renderDataItems(canvasData.channels)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={2.4} mdOffset={2.4}>
        </Grid>
  
        {/* Bottom Row */}
        <Grid item xs={12} md={6} sx={{borderTop: "2px solid black", borderRight: "2px solid black"}}>
          <CanvasSection title="Cost Structure" icon={AccountBalanceWalletIcon}>
            {canvasData && renderDataItems(canvasData.costStructure)}
          </CanvasSection>
        </Grid>
  
        <Grid item xs={12} md={6} sx={{borderTop: "2px solid black"}}>
          <CanvasSection title="Revenue Streams" icon={AttachMoneyIcon}>
            {canvasData && renderDataItems(canvasData.revenueStreams)}
          </CanvasSection>
        </Grid>
      </Grid>
    );
  };