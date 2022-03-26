import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import "../styles/Components/_packaccordion.scss"

const PackAccordion = ({size, expanded, handleChange}) => {
    
    return (
        <Accordion className='accordion' expanded={expanded} onChange={handleChange}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className='accordion-summary-text'>Pack Mixto x{size}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h5" className='accordion-summary-detail'>
                    <strong>Se compone de</strong><br />
                    x{size / 3} <strong>American Amber Ale,</strong><br />
                    x{size / 3} <strong>Golden Ale,</strong><br />
                    x{size / 3} <strong>Neipa</strong>
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default PackAccordion;