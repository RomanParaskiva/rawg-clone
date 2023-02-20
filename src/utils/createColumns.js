
export const createGridColumns = (arr, columns, Component) => {
    const result = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
       if (!Array.isArray(result[counter])) result.push([])

       result[counter].push(arr[i])

       counter++;
       if(counter == columns) counter = 0
    }

    return result.map((col, idx) => (
        <div key={"col-" + idx} className="games-grid__column">
          {col.map((item) => (
            <Component key={item.id} item={item} />
          ))}
        </div>
      ))
}