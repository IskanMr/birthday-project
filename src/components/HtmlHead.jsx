import { Helmet } from "react-helmet";

export function HtmlHead({ title, description, link }) {
  return (
    <Helmet>
      <title>{`Happy Birthday 🎉`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={link} />
    </Helmet>
  );
}
