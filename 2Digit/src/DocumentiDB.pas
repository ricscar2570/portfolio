unit DocumentiDB;

interface

uses
  FireDAC.Comp.Client, FireDAC.Stan.Param, System.SysUtils, Vcl.StdCtrls;

type
  TDocumentiDB = class
  private
    FDConnection: TFDConnection;
    FDQuery: TFDQuery;
  public
    constructor Create;
    procedure SetupDatabase;
    procedure SaveDocument(NomeFile: String; TestoOCR: String; Categoria: String);
    procedure SearchDocument(Termini: String; ListBoxResults: TListBox);
  end;

implementation

constructor TDocumentiDB.Create;
begin
  FDConnection := TFDConnection.Create(nil);
  FDQuery := TFDQuery.Create(nil);
  FDQuery.Connection := FDConnection;
end;

procedure TDocumentiDB.SetupDatabase;
begin
  FDConnection.DriverName := 'SQLite';
  FDConnection.Params.Database := 'Documenti.db';
  FDConnection.LoginPrompt := False;
  FDConnection.Connected := True;

  FDConnection.ExecSQL(
    'CREATE TABLE IF NOT EXISTS Documenti (' +
    'ID INTEGER PRIMARY KEY AUTOINCREMENT, ' +
    'NomeFile TEXT, ' +
    'Categoria TEXT, ' +
    'DataScan TEXT)');

  FDConnection.ExecSQL(
    'CREATE VIRTUAL TABLE IF NOT EXISTS DocumentiFTS USING fts5(' +
    'TestoOCR, content=Documenti, content_rowid=ID)');
end;

procedure TDocumentiDB.SaveDocument(NomeFile: String; TestoOCR: String; Categoria: String);
begin
  FDQuery.SQL.Text := 'INSERT INTO Documenti (NomeFile, Categoria, DataScan) ' +
                      'VALUES (:NomeFile, :Categoria, :DataScan)';
  FDQuery.ParamByName('NomeFile').AsString := NomeFile;
  FDQuery.ParamByName('Categoria').AsString := Categoria;
  FDQuery.ParamByName('DataScan').AsString := DateTimeToStr(Now);
  FDQuery.ExecSQL;

  FDQuery.SQL.Text := 'INSERT INTO DocumentiFTS (rowid, TestoOCR) VALUES (:rowid, :TestoOCR)';
  FDQuery.ParamByName('rowid').AsInteger := FDConnection.GetLastAutoGenValue('ID');
  FDQuery.ParamByName('TestoOCR').AsString := TestoOCR;
  FDQuery.ExecSQL;
end;

procedure TDocumentiDB.SearchDocument(Termini: String; ListBoxResults: TListBox);
begin
  FDQuery.SQL.Text := 'SELECT * FROM Documenti WHERE TestoOCR MATCH :Termini';
  FDQuery.ParamByName('Termini').AsString := Termini;
  FDQuery.Open;

  ListBoxResults.Clear;
  while not FDQuery.Eof do
  begin
    ListBoxResults.Items.Add(FDQuery.FieldByName('NomeFile').AsString);
    FDQuery.Next;
  end;
end;

end.
