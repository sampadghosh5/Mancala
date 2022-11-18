//File for Drawing and all functions relevant to Choose_Game_Mode screen

extern const int screenHeight;
extern const int screenWidth;
extern int current_window;

int choose_game_mode() {
    BeginDrawing();

            ClearBackground(RAYWHITE);
            
            DrawText("This is the Choose_Game_Mode window\nLeft Click to go back to Main Menu", 40, screenHeight / 15, 20, RED);
            

    EndDrawing();
    
    //delete this code.
    if(IsMouseButtonDown(MOUSE_BUTTON_LEFT)) {
        current_window = 0;
    }
    return 0;
}