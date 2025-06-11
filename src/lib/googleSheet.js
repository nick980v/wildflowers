import { google } from "googleapis";

export async function getSheetData() {
  const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const range = "'Wild flowers Calendar'!A2:D";

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = res.data.values || [];

  return rows.map(([date, time, name, notes]) => ({
    date,
    time,
    name,
    notes,
  }));
}
