declare module "rehype-add-classes" {
  import { Plugin } from "unified";

  interface RehypeAddClassesOptions {
    [element: string]: string | string[];
  }

  const rehypeAddClasses: Plugin<[RehypeAddClassesOptions?]>;

  export default rehypeAddClasses;
}
