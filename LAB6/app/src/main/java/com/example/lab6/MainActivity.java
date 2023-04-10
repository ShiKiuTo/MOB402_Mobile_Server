package com.example.lab6;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends AppCompatActivity {
    Button btnParser;
    ProgressDialog pd;
    private String line;
    String urlLink = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btnParser = (Button) findViewById(R.id.btnParseJson);
        btnParser.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                new myAsynTask().execute(urlLink);

            }
        });
    }

    private class myAsynTask extends AsyncTask<String, String, String> {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            pd = new ProgressDialog(MainActivity.this);
            pd.setMessage("Please wait ...");
            pd.setCancelable(false);
            pd.show();
        }

        @Override
        protected String doInBackground(String... strings) {
            String strJson = readJsonOnline(strings[0]);
            try {
                Log.d("//===", strJson);
            } catch (Exception ex) {
                Log.d("Error: ", ex.toString());
            }
            return null;
        }

        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);
            if (pd.isShowing()){
                pd.dismiss();
            }
        }
    }

    public String readJsonOnline(String linkURL) {
        HttpURLConnection connection = null;
        BufferedReader bufferedReader = null;
        StringBuffer stringBuffer = new StringBuffer();
        try {
            URL url = new URL(linkURL);
            connection = (HttpURLConnection) url.openConnection();
            connection.connect();
            InputStream inputStream = connection.getInputStream();
            bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            String line = "";
            while ((line = bufferedReader.readLine()) != null) {
                stringBuffer.append(line + "\n");
            }
            return stringBuffer.toString();
        } catch (Exception ex) {
            Log.d("Error: ", ex.toString());
        }
        return null;
    }
}
