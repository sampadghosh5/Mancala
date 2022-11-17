#include "raylib.h"
#include "main_menu.c"
#include "instructions.c"

const int screenWidth = 1920;
const int screenHeight = 1080;

enum gameScreen {Main_Menu, Choose_Game_Mode, Choose_Difficulty, two_player_mode, Human_v_AI, Win_lose, Exit_playAnother, Instructions
    //0 = Main Menu
    //1 = Choose Game mode
    //2 = Choose Difficulty (If AI chosen earlier)
    //3 = 2-player mode
    //4 = Human vs AI mode
    //7 = Win/Lose Screen
    //8 = Exit/Play another game
    //9 = Instructions Screen
    };
    
//------------------------------------------------------------------------------------
// Program main entry point
//------------------------------------------------------------------------------------
int main(void)
{
    //Initialization
    InitWindow(screenWidth, screenHeight, "Mancala");
    SetTargetFPS(60);               // Set our game to run at 60 frames-per-second
    enum gameScreen current_window = Main_Menu;
    
    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
        switch (current_window) {
            case Main_Menu:
            {
                main_menu();
            }            
            case Instructions: {
                //instructions();
            }
        }
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}