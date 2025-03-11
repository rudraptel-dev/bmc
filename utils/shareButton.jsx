import React from 'react';
import { 
  Box,
  Typography, 
  Tooltip
} from '@mui/material';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    RedditShareButton,
    EmailIcon,
    RedditIcon,
    TelegramIcon,
    TelegramShareButton
} from 'react-share';

export const renderShareButtons = ({shareUrl}) => {
  const handleEmailShare = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Check out this Business Model Canvas");
    const body = encodeURIComponent(`Hey there, check out my Business Model Canvas: ${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 1, 
      alignItems: 'center',
      mt: 2,
      flexWrap: 'wrap'
    }}>
      <Typography variant="subtitle1" sx={{ mr: 1 }}>
        Share:
      </Typography>
      
      <Tooltip title="Share on Facebook">
        <FacebookShareButton url={shareUrl} quote="Check out this Business Model Canvas">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </Tooltip>
  
      <Tooltip title="Share on Twitter">
        <TwitterShareButton url={shareUrl} title="Check out this Business Model Canvas">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Tooltip>
  
      <Tooltip title="Share on LinkedIn">
        <LinkedinShareButton url={shareUrl} title="Business Model Canvas" summary="Check out this Business Model Canvas">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </Tooltip>
  
      <Tooltip title="Share on WhatsApp">
        <WhatsappShareButton url={shareUrl} title="Check out this Business Model Canvas">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </Tooltip>

      <Tooltip title="Share on Telegram">
        <TelegramShareButton url={shareUrl} title="Check out this Business Model Canvas">
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </Tooltip>

      <Tooltip title="Share via Email">
        <div onClick={handleEmailShare} style={{ cursor: 'pointer' }}>
          <EmailIcon size={32} round />
        </div>
      </Tooltip>

      <Tooltip title="Share on Reddit">
        <RedditShareButton url={shareUrl} title="Check out this Business Model Canvas">
          <RedditIcon size={32} round />
        </RedditShareButton>
      </Tooltip>
    </Box>
  );
};