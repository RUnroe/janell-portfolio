export default interface LinkStructure {
  title: string,
  url: string,
  children: LinkStructure[] | null
}