#include "raylib.h"
#include "main_menu.c"
#include "instructions.c"
#include "choose_game_mode.c"

int current_window = 0;
//0 = Main Menu, 1 = Choose Game Mode, 2 = Choose Difficulty if AI chosen earlier, 9 = Instructions screen

const int screenWidth = 1920;
const int screenHeight = 1080;  

Color startColor = RED;
Color instructionsColor = RED;

//------------------------------------------------------------------------------------
// Program main entry point
//------------------------------------------------------------------------------------
int main(void)
{
    // Initialization
    //--------------------------------------------------------------------------------------
    InitWindow(screenWidth, screenHeight, "Mancala");
    SetTargetFPS(60);               // Set our game to run at 60 frames-per-second
    
    Color startColor = RED;
    Color instructionsColor = RED;
    
    int startHeight = screenHeight - (150 + screenHeight / 15);
    int instructionsHeight = screenHeight - 150;
    //--------------------------------------------------------------------------------------

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
        switch (current_window) {
            case 0:
                main_menu();
                break;
                
            case 1:
                choose_game_mode();
                break;
        
            case 9:
                instructions();
                break;

        }      
        
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}