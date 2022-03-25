import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const PackAccordion = ({size, expanded, handleChange}) => {
    
    return (
        <Accordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary>
                Pack Mixto x{size}
            </AccordionSummary>
            <AccordionDetails>
                Se compone de<br />
                x{size / 3} American Amber Ale,<br />
                x{size / 3} Golden Ale,<br />
                x{size / 3} Neipa.
            </AccordionDetails>
        </Accordion>
    )
}

export default PackAccordion;