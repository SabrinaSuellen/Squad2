Attribute VB_Name = "Módulo1"
Sub Finalizacao()
    
    Range("M2:N2").NumberFormat = "$#,##0.00_);[Red]($#,##0.00)"
    coluna = 8
    linha = 2
    cotacaoDolar = Cells(2, 14).Value
    cotacaoEuro = Cells(2, 13).Value
    While Cells(linha, 1).Value <> ""
        If Cells(linha, 5).Value <> "" And Cells(linha, 6).Value <> "" Then
            valorCelulaDolar = 99999999999#
            valorCelulaEuro = 99999999999#
            If Cells(linha, 5).Value <> "inválido" Then
                valorCelulaDolar = Cells(linha, 5).Value * cotacaoDolar
            End If
            If Cells(linha, 6).Value <> "inválido" Then
                valorCelulaEuro = Cells(linha, 6).Value * cotacaoEuro
            End If
            If (valorCelulaEuro = 0 Or valorCelulaDolar > valorCelulaEuro) And Cells(linha, 6).Value <> "inválido" Then
                Cells(linha, 7).Value = valorCelulaEuro
                Cells(linha, 6).Interior.ColorIndex = 4
                Cells(linha, 7).NumberFormat = "$#,##0.00_);[Red]($#,##0.00)"
            ElseIf (valorCelulaDolar = 0 Or valorCelulaDolar < valorCelulaEuro) And Cells(linha, 5).Value <> "inválido" Then
                Cells(linha, 7).Value = valorCelulaDolar
                Cells(linha, 5).Interior.ColorIndex = 4
                Cells(linha, 7).NumberFormat = "$#,##0.00_);[Red]($#,##0.00)"
            End If
        End If
      
        linha = linha + 1
    Wend

    Columns("A:O").HorizontalAlignment = xlCenter
    Columns("A:N").EntireColumn.AutoFit
    Columns("I:I").ClearContents
    Range("A1:H1").Interior.ColorIndex = 41

End Sub
