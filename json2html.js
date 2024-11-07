// json2html.js
export default function json2html(data) {
    // Validate if data is an array and not empty
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available.</p>';
    }
  
    // Extract column headers (keys from all objects, ensuring all columns are considered)
    const columns = Array.from(new Set(data.flatMap(Object.keys)));
  
    let html = '<table data-user="rishabchib1@gmail.com">';
  
    // Table header
    html += '<thead><tr>';
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
    html += '</tr></thead>';
  
    // Table body
    html += '<tbody>';
    data.forEach(row => {
      html += '<tr>';
      columns.forEach(col => {
        // Check if the row has the column, otherwise display an empty cell
        html += `<td>${row[col] || ''}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody>';
  
    html += '</table>';
    
    return html;
  }
  