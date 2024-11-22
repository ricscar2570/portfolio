// Categorization unit - categorizes documents based on keywords
unit Categorization;

interface

type
  TCategorization = class
  public
    function Categorize(Text: String): String;
  end;

implementation

function TCategorization.Categorize(Text: String): String;
begin
  // Simulated categorization logic
  if Pos('invoice', LowerCase(Text)) > 0 then
    Result := 'Invoice'
  else
    Result := 'Uncategorized';
end;

end.