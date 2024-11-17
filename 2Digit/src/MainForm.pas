unit MainForm;

interface

uses
  Vcl.Forms, Vcl.Controls, Vcl.StdCtrls, Vcl.ExtCtrls, FireDAC.Comp.Client,
  DocumentiDB, OCRModule, Categorization, ExportModule;

type
  TForm1 = class(TForm)
    ButtonScan: TButton;
    ButtonSearch: TButton;
    ButtonSave: TButton;
    ComboBoxCategorie: TComboBox;
    MemoOCR: TMemo;
    ListBoxResults: TListBox;
    procedure ButtonScanClick(Sender: TObject);
    procedure ButtonSearchClick(Sender: TObject);
    procedure ButtonSaveClick(Sender: TObject);
  private
    DocumentDB: TDocumentiDB;
    OCR: TOCRModule;
    Categorizer: TCategorization;
    Exporter: TExportModule;
    procedure SetupDatabase;
    procedure SalvaDocumento;
    procedure CercaDocumento(Termini: String);
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.SetupDatabase;
begin
  DocumentDB := TDocumentiDB.Create;
  DocumentDB.SetupDatabase;
end;

procedure TForm1.ButtonScanClick(Sender: TObject);
begin
  MemoOCR.Text := OCR.ExtractTextFromImage(ImageAnteprima.Picture.Bitmap);
end;

procedure TForm1.ButtonSaveClick(Sender: TObject);
begin
  SalvaDocumento;
end;

procedure TForm1.SalvaDocumento;
var
  Categoria: String;
begin
  Categoria := Categorizer.Categorize(MemoOCR.Text);
  DocumentDB.SaveDocument('NomeFile', MemoOCR.Text, Categoria);
end;

procedure TForm1.ButtonSearchClick(Sender: TObject);
begin
  CercaDocumento(EditSearch.Text);
end;

procedure TForm1.CercaDocumento(Termini: String);
begin
  DocumentDB.SearchDocument(Termini, ListBoxResults);
end;

end.
