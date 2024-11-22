object Form1: TForm1
  Caption = 'Document Management System'
  ClientHeight = 600
  ClientWidth = 800
  Position = poScreenCenter
  OnCreate = FormCreate
  object ButtonScan: TButton
    Left = 20
    Top = 20
    Width = 120
    Height = 40
    Caption = 'Scan Document'
    OnClick = ButtonScanClick
  end
  object ButtonSave: TButton
    Left = 160
    Top = 20
    Width = 120
    Height = 40
    Caption = 'Save Document'
    OnClick = ButtonSaveClick
  end
  object EditSearch: TEdit
    Left = 20
    Top = 80
    Width = 200
    Height = 24
    Text = ''
  end
  object ButtonSearch: TButton
    Left = 240
    Top = 80
    Width = 120
    Height = 40
    Caption = 'Search Documents'
    OnClick = ButtonSearchClick
  end
  object ComboBoxCategorie: TComboBox
    Left = 20
    Top = 140
    Width = 200
    Height = 24
    Text = 'Select Category'
  end
  object MemoOCR: TMemo
    Left = 20
    Top = 180
    Width = 360
    Height = 200
    ScrollBars = ssVertical
  end
  object ListBoxResults: TListBox
    Left = 400
    Top = 180
    Width = 360
    Height = 400
  end
  object ImageAnteprima: TImage
    Left = 20
    Top = 400
    Width = 360
    Height = 160
    Stretch = True
  end
  object FileOpenDialog1: TFileOpenDialog
    Filter = 'Image Files|*.bmp;*.jpg;*.jpeg;*.png'
  end
end