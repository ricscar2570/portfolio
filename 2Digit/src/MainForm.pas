// MainForm unit - contains the primary UI and event handlers
unit MainForm;

interface

uses
  Vcl.Forms, Vcl.Controls, Vcl.StdCtrls, Vcl.ExtCtrls, Vcl.Dialogs, Vcl.Graphics,
  FireDAC.Comp.Client, FireDAC.Stan.Param, System.SysUtils,
  DocumentiDB, OCRModule, Categorization;

type
  TForm1 = class(TForm)
    ButtonScan: TButton;
    ButtonSave: TButton;
    ButtonSearch: TButton;
    ComboBoxCategorie: TComboBox;
    MemoOCR: TMemo;
    ListBoxResults: TListBox;
    ImageAnteprima: TImage;
    FileOpenDialog1: TFileOpenDialog;
    EditSearch: TEdit;
    procedure FormCreate(Sender: TObject);
    procedure ButtonScanClick(Sender: TObject);
    procedure ButtonSaveClick(Sender: TObject);
    procedure ButtonSearchClick(Sender: TObject);
  private
    DocumentDB: TDocumentiDB;
    OCR: TOCRModule;
    Categorizer: TCategorization;
    procedure SetupDatabase;
    procedure SalvaDocumento;
    procedure CercaDocumento(Termini: String);
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

// Initialize components and set up the database
procedure TForm1.FormCreate(Sender: TObject);
begin
  SetupDatabase;
  OCR := TOCRModule.Create;
  Categorizer := TCategorization.Create;
end;

// Set up the SQLite database
procedure TForm1.SetupDatabase;
begin
  DocumentDB := TDocumentiDB.Create;
  DocumentDB.SetupDatabase;
end;

// Handle the "Scan Document" button click
procedure TForm1.ButtonScanClick(Sender: TObject);
begin
  if FileOpenDialog1.Execute then
  begin
    ImageAnteprima.Picture.LoadFromFile(FileOpenDialog1.FileName);
    MemoOCR.Text := OCR.ExtractTextFromImage(ImageAnteprima.Picture.Bitmap);
  end;
end;

// Handle the "Save Document" button click
procedure TForm1.ButtonSaveClick(Sender: TObject);
begin
  SalvaDocumento;
end;

// Save the document details to the database
procedure TForm1.SalvaDocumento;
var
  Categoria: String;
begin
  Categoria := Categorizer.Categorize(MemoOCR.Text);
  DocumentDB.SaveDocument('ScannedFile', MemoOCR.Text, Categoria);
end;

// Handle the "Search Documents" button click
procedure TForm1.ButtonSearchClick(Sender: TObject);
begin
  CercaDocumento(EditSearch.Text);
end;

// Perform a search in the database
procedure TForm1.CercaDocumento(Termini: String);
begin
  DocumentDB.SearchDocument(Termini, ListBoxResults);
end;

end.