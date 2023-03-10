import { google } from 'googleapis';
export async function getHotels() {
  try {
     
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );
    
    console.log('fetching data');
    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "https://docs.google.com/spreadsheets/d/1Zkg6gi978hweYC3x_1G6e7RgvMyC9iLxb3Gzxg5Zmm0/edit#gid=564159730",
      range: 'enkorokmara_camp', // sheet name
    });
    console.log('fetching data');

    const rows = response.data.values;
    console.log(rows);
    if (rows.length) {
      return rows.map((row) => ({
        title: row[2],
        subtitle: row[3],
        code: row[4],
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return "hello Mark";
}