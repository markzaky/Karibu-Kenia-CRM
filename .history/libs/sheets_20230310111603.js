const { GoogleSpreadsheet } = require('google-spreadsheet')
export async function getHotels() {
  const doc = new GoogleSpreadsheet('1Zkg6gi978hweYC3x_1G6e7RgvMyC9iLxb3Gzxg5Zmm0');
  await doc.useServiceAccountAuth({
    client_email: "data-access@safari-crm.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9m9pEfJFT64IW\nsGq2x46nYK7zDl5hKpuV73AVBOb8SdGF+uG16ROInCw0oz4syoSrwS4VZmtO8uNM\nRiKSSNC5ZMCSucY2ttaTTH9u3kRJO7ELsE+/slAIZa6cCbR3QTy4B9sqvdpeQhF5\n8h0BMedijDj1EZzObrvCdsE5g2Pfz95j9vJMJdNJOMyRvRKGYsvkBk4jBxZmTQeA\ndKiDq+Ms+HIraBozkpqxUiRbWvg65wqIfu7AigAtUGyFc/Vu0nsJOmPfwkjrVU+1\nyT5qivTkJ3U/H6YGHRhyzaE6+EjxhUAQgFOjkvmbe6c8DMu8Fo+C/0fEz0xurAf/\nXVVK2hLZAgMBAAECggEARIqxhW5ubqLE/QS7HuXWuMTnmW+JSKDJa5MJtl92TJ82\nwbMmosbly82A4WpdkH2JJjmIOi4y/nApIKp91tnBsjMsth23/JFt0gOmUWLB1qNg\nZfRPb+G6sr5nN3r+pNmNZI1aegH1jXteq/GM8KCkn2hHMrgyMiGveCXLxcmscfwo\ng9J40/ATkpSO2rYMwSZfC0FyubioptaK2wGutuOy9up4MDIGKjjLSFviwhE4vVCO\nVqI+S0sCcwmJEcIwkUSGY+PBRn8bBIQfLEJhci/sy+XTrmyhVbYjfkcoPtRlbANg\n5nDpeM61hp+xybAGSSq/xQYq07k+32hKuyX1S2BeDQKBgQDcZbMmBYcewR568TRH\nN0qxGWIsDw0048Q050o18mpolxZ6Nl4FSs+xG1gweRxe2XSytBsCc8DPM4ba2Bu2\nwMGbHClWuzAkisZLTZyt0ySGWD+1vgDvxk32nluCZ+ZuIWHg49j79VFy5qYG3m5p\nJQLdSOqvTNoLARbmq5FK0ulEKwKBgQDcPO2BtiMBe8AYu0/oTz58F0gDkkqpNNPy\npHD1VTmiqxb7DR+Jv+Tx+vRlsNy+ddhEXcpc26rnzGR1Rr2s31miQL696X3SV/z4\nMTh8nb02m1nOx/LVCsToXDPlHyg92sBpzGiVWjThO9QvT7ayzKmYRhjgVAnucX4R\nsojmVJDvCwKBgQCFPx8uT40/dLY+0fEvVShdJeGKjZcIcOPAsEzXjLX0gdPfE1uI\ni5BBnSyWMcKLPaEmIWlq9ByPqLFRQfKPbL4gTshXXVhf316/TC77kHm2l0f9UuAy\nFowwG9FrZ/GSh7ArTNV0jv4tH3ElGflarDutGVZ5oVb57DCySOvQdu78fQKBgQCB\nBuTyeD178f8xvhNre3mVA6K6DOvWw89kOTjAUmTIy0lUXXTbo+PCbI7gQMSihLHm\nI7iZvEwdLx6vonkfHV8K8rmM041WPRxEX7nDMDqZElyEC5pVe9CufM4ebqmJy22s\nzgd7cHTIe9+stBvKFqNJRc/vJO0Il88PGTShFGwwzwKBgEnZlqH00iypm+TTtosb\njbj/LpYTZ+Pv9WPFKOp1zITnavXdqxjM/o143EhPxJZMMq4puH3fInZ74x7raYan\nJBSVPB49C9Ep7AAVHI/H8CGyoy76hVHx3Gl05FTtQ2upQGBb/uFXoliqfxsZ+JS1\nx8szDNnNjnHgFADqoeKUFoMu\n-----END PRIVATE KEY-----\n",
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle['AA_Lodge_Amboseli'];
  const sheet1 = doc.sheetsByTitle['AA_Lodge_Amboseli1'];

  const AA_Lodge_Amboseli = await sheet.getRows()
  const AA_Lodge_Amboseli1 = await sheet1.getRows()
  // console.log(sheet.rowCount);
  // await sheet.loadCells('A1:F10');
  // console.log(sheet.cellStats);
  // const c6 = sheet.getCellByA1('F2')
  // console.log(c6.value);

  // const rows = await sheet.getRows()
  //   if (rows.length) {
  //     return rows.map((row) => ({
  //       datefrom: row.Date_From,
  //       dateto: row.To_Date,
  //       season: row.Season,
  //       meal:row.Meal_Type,
  //       room:row.Rooms,
  //       price:[row.Peak,row.High,row.Low],
  //     }));
  //   }
  // else{
    return [
      {AALodge: AA_Lodge_Amboseli,AAlodge2: AA_Lodge_Amboseli1}];
  // }

}