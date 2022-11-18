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
<<<<<<< HEAD
=======
    
    Color startColor = RED;
    Color instructionsColor = RED;
    
    int startHeight = screenHeight - (150 + screenHeight / 15);
    int instructionsHeight = screenHeight - 150;
    //--------------------------------------------------------------------------------------
>>>>>>> 149decaf9b2ebf1bd8f5fc87535092244ec81e28

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
<<<<<<< HEAD
        switch (current_window) {
            case 0:
                main_menu();
                break;
                
            case 1:
                choose_game_mode();
                break;
=======
        // Update
        //----------------------------------------------------------------------------------
        // TODO: Update your variables here
        //----------------------------------------------------------------------------------
        
        
        if((startHeight -5 < GetMouseY()) 
            && (GetMouseY() < startHeight+25) 
            && (35< GetMouseX())
            && (GetMouseX()< 1000)){
            
            startColor = GREEN;
            if(IsMouseButtonDown(MOUSE_LEFT_BUTTON)){
                //continue to start menu
                startColor = BLUE;
            }
        }
        else startColor = RED;
        if((instructionsHeight -5 < GetMouseY()) 
            && (GetMouseY() < instructionsHeight+25)
            && (35< GetMouseX())
            && (GetMouseX()< 1000)){
            
            instructionsColor = GREEN;
            if(IsMouseButtonDown(MOUSE_LEFT_BUTTON)){
                //continue to start menu
                instructionsColor = BLUE;
            }
        }
        else instructionsColor = RED;
>>>>>>> 149decaf9b2ebf1bd8f5fc87535092244ec81e28

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