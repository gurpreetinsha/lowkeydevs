/**
 * Utility functions to export calculator inputs and outputs client-side.
 */

export function downloadFile(content: string, filename: string, contentType: string) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportToCSV(
  title: string,
  inputs: Record<string, any>,
  outputs: Record<string, any>
) {
  let csvContent = `LowkeyDevs - ${title} Calculation Export\n`;
  csvContent += `Generated At: ${new Date().toLocaleString()}\n\n`;
  
  csvContent += `INPUT VARIABLES\n`;
  csvContent += `Variable,Value\n`;
  Object.entries(inputs).forEach(([key, value]) => {
    csvContent += `"${key}","${String(value).replace(/"/g, '""')}"\n`;
  });
  
  csvContent += `\nCALCULATION OUTPUTS\n`;
  csvContent += `Metric,Result\n`;
  Object.entries(outputs).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      // For arrays/objects (like loan schedules), just print summary or skip complex tables
      csvContent += `"${key}","[Data Table - See PDF or Print View]"\n`;
    } else {
      csvContent += `"${key}","${String(value).replace(/"/g, '""')}"\n`;
    }
  });

  const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-calculation.csv`;
  downloadFile(csvContent, filename, "text/csv;charset=utf-8;");
}

export function exportToText(
  title: string,
  inputs: Record<string, any>,
  outputs: Record<string, any>
) {
  let txtContent = `==================================================\n`;
  txtContent += `         LOWKEYDEVS CALCULATION REPORT            \n`;
  txtContent += `==================================================\n`;
  txtContent += `Tool: ${title}\n`;
  txtContent += `Date: ${new Date().toLocaleString()}\n`;
  txtContent += `--------------------------------------------------\n\n`;

  txtContent += `INPUT PARAMETERS:\n`;
  Object.entries(inputs).forEach(([key, value]) => {
    txtContent += ` - ${key}: ${value}\n`;
  });
  
  txtContent += `\nCALCULATED RESULTS:\n`;
  Object.entries(outputs).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        txtContent += ` - ${key}: [Table containing ${value.length} entries]\n`;
      } else {
        txtContent += ` - ${key}: [Structured Object]\n`;
      }
    } else {
      txtContent += ` - ${key}: ${value}\n`;
    }
  });
  
  txtContent += `\n--------------------------------------------------\n`;
  txtContent += `Thank you for using LowkeyDevs.com!\n`;
  txtContent += `==================================================\n`;

  const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-report.txt`;
  downloadFile(txtContent, filename, "text/plain;charset=utf-8;");
}
