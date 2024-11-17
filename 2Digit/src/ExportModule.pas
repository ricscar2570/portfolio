unit ExportModule;

interface

uses
  System.SysUtils;

type
  TExportModule = class
  public
    procedure ExportToDocx(Testo: String);
    procedure ExportToPDF(Testo: String);
  end;

implementation

procedure TExportModule.ExportToDocx(Testo: String);
begin
  // Codice per esportazione a DOCX
end;

procedure TExportModule.ExportToPDF(Testo: String);
begin
  // Codice per esportazione a PDF
end;

end.
