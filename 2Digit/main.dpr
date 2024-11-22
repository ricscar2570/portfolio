// Main entry point for the Document Management System project
program DocumentManagementSystem;

uses
  Vcl.Forms,
  MainForm in 'src\MainForm.pas' {Form1};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.