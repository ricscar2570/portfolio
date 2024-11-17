unit Categorization;

interface

type
  TCategorization = class
  public
    function Categorize(Testo: String): String;
  end;

implementation

function TCategorization.Categorize(Testo: String): String;
begin
  // Implementazione per categorizzazione
  Result := 'Categoria determinata';
end;

end.
