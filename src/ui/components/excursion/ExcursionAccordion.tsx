"use client";
import type { FC } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { SelectArrow } from "@/ui/atoms/SelectArrow";
import { ExcursionFull } from "@/entities/excursion/excursion";

interface ExcursionAccordionProps {
  excursion: ExcursionFull;
}

const ExcursionAccordion: FC<ExcursionAccordionProps> = ({ excursion }) => {
  const accordionItems = [
    excursion.summary && (
      <AccordionItem
        key="1"
        aria-label="Что вас ждет на экскурсии"
        title="Что вас ждет на экскурсии"
        indicator={<SelectArrow />}
        className="shadow-md shadow-cyan-100"
      >
        <p dangerouslySetInnerHTML={{ __html: excursion.summary }} />
      </AccordionItem>
    ),
    excursion.itinerary && (
      <AccordionItem
        key="2"
        aria-label="Программа"
        title="Программа"
        indicator={<SelectArrow />}
        className="shadow-md shadow-cyan-100"
      >
        <p dangerouslySetInnerHTML={{ __html: excursion.itinerary }} />
      </AccordionItem>
    ),
    excursion.included && (
      <AccordionItem
        key="3"
        aria-label="Что входит"
        title="Что входит"
        indicator={<SelectArrow />}
        className="shadow-md shadow-cyan-100"
      >
        <p dangerouslySetInnerHTML={{ __html: excursion.included }} />
      </AccordionItem>
    ),
  ];

  // Убираем undefined или пустые элементы
  const filteredItems = accordionItems.filter(Boolean) as JSX.Element[];

  return filteredItems.length > 0 ? (
    <Accordion variant="splitted">
      {filteredItems}
    </Accordion>
  ) : null;
};

export default ExcursionAccordion;
