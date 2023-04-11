package com.example.lab8;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import org.json.JSONObject;

import java.net.URISyntaxException;

import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;

public class MainActivity extends AppCompatActivity {
    Button btnLogin, btnChat;
    EditText edMessage;
    private String serverURL = "http://192.168.192.90";
    private Socket _socket;

    {
        try {
            _socket = IO.socket(serverURL);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btnChat = (Button) findViewById(R.id.btnChat);
        btnLogin = (Button) findViewById(R.id.btnLogin);
        edMessage = (EditText) findViewById(R.id.edMessage);

        _socket.connect();
        _socket.on("receiver_message", onNewMessage);
    }

    public Socket get_socket() {
        return _socket;
    }

    public void chat(View view) {
        _socket.emit("send_message", edMessage.getText().toString());
        edMessage.setText("");
    }

    public void login(View view) {
        _socket.emit("user_login", edMessage.getText().toString());
        edMessage.setText("");
    }

    private Emitter.Listener onNewMessage = new Emitter.Listener() {

        @Override
        public void call(final Object... args) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    JSONObject data = (JSONObject) args[0];
                    String message;
                    message = data.optString("data");
                    Log.d("chat:", "==>" + message);

                }
            });
        }
    };

}