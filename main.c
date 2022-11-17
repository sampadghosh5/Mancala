#include "raylib.h"

typedef struct {
    int current_window;
    //0 = Main Menu
    //1 = Choose Game mode
    //2 = Choose Difficulty (If AI chosen earlier)
    //3 = 2-player mode
    //4 = Human vs AI mode
    //7 = Win/Lose Screen
    //8 = Exit/Play another game
    //9 = Instructions Screen
    } gameScreen;

//------------------------------------------------------------------------------------
// Program main entry point
//------------------------------------------------------------------------------------
int main(void)
{
    // Initialization
    //--------------------------------------------------------------------------------------
    const int screenWidth = 1920;
    const int screenHeight = 1080;

    InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");

    SetTargetFPS(60);               // Set our game to run at 60 frames-per-second
    //--------------------------------------------------------------------------------------

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
        // Update
        //----------------------------------------------------------------------------------
        // TODO: Update your variables here
        //----------------------------------------------------------------------------------

        // Draw
        //----------------------------------------------------------------------------------
        BeginDrawing();

            ClearBackground(RAYWHITE);
            
            DrawText("START", 40, screenHeight - (150 + screenHeight / 15), 20, RED);
            DrawText("Instructions", 40, screenHeight - 150, 20, RED);

        EndDrawing();
        //----------------------------------------------------------------------------------
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}