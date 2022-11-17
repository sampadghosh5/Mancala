//File for Drawing and all functions relevant to Instructions screen

extern const int screenHeight;
extern const int screenWidth;

int instructions() {
    BeginDrawing();

            ClearBackground(RAYWHITE);
            
            DrawText("Instructions\nThis is how we play Mancala", 40, screenHeight / 15, 20, RED);
            

    EndDrawing();
    return 0;
}