import { Link } from "@tanstack/react-router";
import { InfoCircle } from "./svgs/info-circle";

export default function InfoBanner({
  informationText,
  link,
  linkText,
}: {
  informationText: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="rounded-md bg-blue-50 px-4 py-1">
      <div className="flex items-center">
        <div className="shrink-0">
          <InfoCircle aria-hidden="true" className="size-5 text-blue-400" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">{informationText}</p>
          {link && (
            <p className="mt-3 text-sm md:ml-6 md:mt-0">
              <Link
                to={link}
                className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
              >
                {linkText}
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
