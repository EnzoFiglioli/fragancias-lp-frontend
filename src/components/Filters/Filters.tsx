type Props = {
  category: string;
  sort: string;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

const Filters = ({
  category,
  sort,
  onCategoryChange,
  onSortChange,
}: Props) => {
  return (
    <aside style={{ display: "flex", gap: "1rem", margin: "40px" }}>
      <label>
        Filtrar:
        <select value={category} onChange={(e) => {
          onCategoryChange(e.target.value)
          console.log(e.target.value)
          }}>
          <option value="all">Todos</option>
          <option value="Desodorante">Desodorante</option>
          <option value="Jabón">Jabón</option>
          <option value="Perfume">Perfume</option>
          <option value="Body Splash">Body Splash</option>
          <option value="Delineador">Delineador</option>
        </select>
      </label>

      <label>
        Ordenar:
        <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Predeterminado</option>
          <option value="price-asc">Precio ↑</option>
          <option value="price-desc">Precio ↓</option>
          <option value="name-asc">Nombre A-Z</option>
          <option value="name-desc">Nombre Z-A</option>
        </select>
      </label>
    </aside>
  );
};

export default Filters;
