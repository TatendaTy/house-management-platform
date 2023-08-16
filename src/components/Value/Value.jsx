import React from "react";
import "./Value.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";


const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side of the section */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>

                {/* right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Our shared values with you</span>
                    <span className="secondaryText">Always ready to assist whenever you
                        <br /> need a roof above your head.</span>
                    <Accordion
                        className="accordion"
                        // allowing a single section to be expanded alone 
                        allowMultipleExpanded={false}
                        //zero index section should extended as a preExpanded section
                        preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className="accordionItem" key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="accordionButton">
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20} />
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                );
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value;