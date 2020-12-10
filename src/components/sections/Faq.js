import React, { useState } from "react";
import Content from "../../ContentJson/Content";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function Faq() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box mt={24} mb={16}>
      <Typography gutterBottom variant={"h2"} component={"h2"}>
        Frequently Asked Questions
      </Typography>
      {Content.faqs.map((faq, index) => (
        <Accordion
          elevation={16}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}d-header`}
          >
            <Typography variant={"h3"} component={"h3"}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
