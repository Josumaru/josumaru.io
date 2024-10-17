import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image, { StaticImageData } from "next/image";

interface Props {
  data: {
    icon: StaticImageData;
    url: string;
    alt: string;
    title: string;
  };
}

const TooltipButton: NextPage<Props> = ({ data }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">
            <Image src={data.icon} alt={data.alt} className="text-muted-foreground"/>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{data.title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipButton;