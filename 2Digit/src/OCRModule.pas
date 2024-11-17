unit OCRModule;

interface

uses
  Vcl.Graphics, System.SysUtils;

type
  TOCRModule = class
  public
    function ExtractTextFromImage(Bitmap: TBitmap): String;
  end;

implementation

function TOCRModule.ExtractTextFromImage(Bitmap: TBitmap): String;
begin
  // Implementazione per OCR con Tesseract
  Result := 'Testo estratto con OCR';
end;

end.
