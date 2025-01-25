import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductLayout({
  children,
  noLayout,
}: {
  children: React.ReactNode;
  noLayout?: boolean;
}) {
  // console.log("noLayout value:", noLayout); // Debugging line
  // if (noLayout) {
  //   return <>{children}</>;
  // }

  return (
    <section className="mt-36 mx-4">
      <div className="grid grid-cols-5 grid-flow-row gap-4">
        <div className="col-span-1">
          <AccordionComponent />
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </section>
  );
}

const AccordionComponent = () => {
  return (
    <Accordion type="multiple" className="text-3xl">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
