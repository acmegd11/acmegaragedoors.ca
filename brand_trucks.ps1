Add-Type -AssemblyName System.Drawing

$logoPath = 'C:\Users\PRATEEK\.gemini\antigravity\scratch\acme-garage-doors\assets\acme-logo.png'
$logo = [System.Drawing.Bitmap]::FromFile($logoPath)

# 1. Process Brown Work Truck (Heavy-duty contractor rack - facing right)
$brownPath = 'C:\Users\PRATEEK\.gemini\antigravity\brain\c7fb1824-1da7-45de-b1bb-a2e26d2a3701\.user_uploaded\media_1793078588571_c4a1d935.jpg'
$brown = [System.Drawing.Bitmap]::FromFile($brownPath)
$g1 = [System.Drawing.Graphics]::FromImage($brown)
$g1.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g1.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g1.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g1.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# Position logo cleanly on front door panel below window line and door handle
$logoSize1 = 100
$x1 = 575
$y1 = 380

# Subtle outer badge halo for contrast on metallic brown paint
$haloBrush1 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
$g1.FillEllipse($haloBrush1, $x1 - 3, $y1 - 3, $logoSize1 + 6, $logoSize1 + 6)
$g1.DrawImage($logo, $x1, $y1, $logoSize1, $logoSize1)

# High-contrast fleet lettering below the logo
$fontTitle = New-Object System.Drawing.Font("Arial", 9.5, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Arial", 7.5, [System.Drawing.FontStyle]::Bold)
$fontPhone = New-Object System.Drawing.Font("Arial", 8.5, [System.Drawing.FontStyle]::Bold)

$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255))
$brushTeal = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(94, 234, 212))
$brushShadow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 0, 0, 0))

# Text with drop-shadows
$g1.DrawString("ACME GARAGE DOORS", $fontTitle, $brushShadow, 551, 486)
$g1.DrawString("ACME GARAGE DOORS", $fontTitle, $brushTeal, 550, 485)

$g1.DrawString("24/7 EMERGENCY DISPATCH", $fontSub, $brushShadow, 546, 502)
$g1.DrawString("24/7 EMERGENCY DISPATCH", $fontSub, $brushWhite, 545, 501)

$g1.DrawString("CALL (289) 783-8146", $fontPhone, $brushShadow, 556, 517)
$g1.DrawString("CALL (289) 783-8146", $fontPhone, $brushWhite, 555, 516)

$g1.Dispose()
$brown.Save('C:\Users\PRATEEK\.gemini\antigravity\scratch\acme-garage-doors\assets\acme-service-truck-brown.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
# Also overwrite technician-van.jpg
$brown.Save('C:\Users\PRATEEK\.gemini\antigravity\scratch\acme-garage-doors\assets\technician-van.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$brown.Dispose()

# 2. Process Black Truck (Crew Cab - facing left)
$blackPath = 'C:\Users\PRATEEK\.gemini\antigravity\brain\c7fb1824-1da7-45de-b1bb-a2e26d2a3701\.user_uploaded\media_1793078588519_b9f7e45a.jpg'
$black = [System.Drawing.Bitmap]::FromFile($blackPath)
$g2 = [System.Drawing.Graphics]::FromImage($black)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g2.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$logoSize2 = 110
$x2 = 365
$y2 = 410

$haloBrush2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 255, 255, 255))
$g2.FillEllipse($haloBrush2, $x2 - 3, $y2 - 3, $logoSize2 + 6, $logoSize2 + 6)
$g2.DrawImage($logo, $x2, $y2, $logoSize2, $logoSize2)

$g2.DrawString("ACME GARAGE DOORS", $fontTitle, $brushShadow, 346, 526)
$g2.DrawString("ACME GARAGE DOORS", $fontTitle, $brushTeal, 345, 525)

$g2.DrawString("24/7 EMERGENCY DISPATCH", $fontSub, $brushShadow, 341, 543)
$g2.DrawString("24/7 EMERGENCY DISPATCH", $fontSub, $brushWhite, 340, 542)

$g2.DrawString("CALL (289) 783-8146", $fontPhone, $brushShadow, 351, 559)
$g2.DrawString("CALL (289) 783-8146", $fontPhone, $brushWhite, 350, 558)

$g2.Dispose()
$black.Save('C:\Users\PRATEEK\.gemini\antigravity\scratch\acme-garage-doors\assets\acme-service-truck-black.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$black.Dispose()

$logo.Dispose()
Write-Host "Branded truck images successfully rendered and saved to assets!"
