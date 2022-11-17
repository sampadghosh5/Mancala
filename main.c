/*******************************************************************************************
*
*   raylib [core] example - Basic window
*
*   Welcome to raylib!
*
*   To test examples, just press F6 and execute raylib_compile_execute script
*   Note that compiled executable is placed in the same folder as .c file
*
*   You can find all basic examples on C:\raylib\raylib\examples folder or
*   raylib official webpage: www.raylib.com
*
*   Enjoy using raylib. :)
*
*   Example originally created with raylib 1.0, last time updated with raylib 1.0

*   Example licensed under an unmodified zlib/libpng license, which is an OSI-certified,
*   BSD-like license that allows static linking with closed source software
*
*   Copyright (c) 2013-2022 Ramon Santamaria (@raysan5)
*
********************************************************************************************/

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
    
    Color startColor = RED;
    Color instructionsColor = RED;
    
    int startHeight = screenHeight - (150 + screenHeight / 15);
    int instructionsHeight = screenHeight - 150;
    //--------------------------------------------------------------------------------------

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
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

        // Draw
        //----------------------------------------------------------------------------------
        BeginDrawing();

            ClearBackground(RAYWHITE);
            
            DrawText("START", 40, screenHeight - (150 + screenHeight / 15), 20, startColor);
            //DrawLine(35, screenHeight - (150 + screenHeight / 15)-5,1000, screenHeight - (150 + screenHeight / 15)+25,BLUE);
            DrawText("Instructions", 40, screenHeight - 150, 20, instructionsColor);

        EndDrawing();
        //----------------------------------------------------------------------------------
        
        
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}