//File for Drawing and all functions relevant to Instructions screen

extern const int screenHeight;
extern const int screenWidth;
extern int current_window;

int instructions() {
    BeginDrawing();

            ClearBackground(RAYWHITE);
            
            DrawText("Instructions\nThis is how we play Mancala\nLeft Click to go back to Main Menu", 40, screenHeight / 15, 20, RED);
            

    EndDrawing();
    if(IsMouseButtonDown(MOUSE_BUTTON_LEFT)) {
        current_window = 0;
    }
    return 0;
}