import { google } from 'googleapis';
export async function getHotels() {
  try {
     
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
        "data-access@safari-crm.iam.gserviceaccount.com",
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );
    console.log(process.env.GOOGLE_SHEETS_PRIVATE_KEY);
    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1Zkg6gi978hweYC3x_1G6e7RgvMyC9iLxb3Gzxg5Zmm0",
      range: 'enkorokmara_camp', // sheet name
    });    
    const rows = response.data.values;
    console.log(rows[0]);
    if (rows.length) {
      return rows.map((row) => ({
        datefrom: row[0],
        dateto: row[1],
        season: row[2],
        // code: row[4],
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return "hello Mark";
}