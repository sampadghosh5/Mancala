//File for Drawing and all functions relevant to Main Menu

extern const int screenHeight;
extern const int screenWidth;

int main_menu() {
    BeginDrawing();

            ClearBackground(RAYWHITE);
            
            DrawText("START", 40, screenHeight - (150 + screenHeight / 15), 20, RED);
            DrawText("Instructions", 40, screenHeight - 150, 20, RED);

    EndDrawing();
    return 0;
}