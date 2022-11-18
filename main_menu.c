//File for Drawing and all functions relevant to Main Menu

extern const int screenHeight;
extern const int screenWidth;
extern Color startColor, instructionsColor;
extern int current_window;

void draw() {
    BeginDrawing();

        ClearBackground(RAYWHITE);
        
        DrawText("START", 40, screenHeight - (150 + screenHeight / 15), 20, startColor);
        //DrawLine(35, screenHeight - (150 + screenHeight / 15)-5,1000, screenHeight - (150 + screenHeight / 15)+25,BLUE);
        DrawText("Instructions", 40, screenHeight - 150, 20, instructionsColor);

    EndDrawing();
}

int main_menu() {
    draw();
    
    if((screenHeight - (150 + screenHeight / 15)-5 < GetMouseY()) 
        && (GetMouseY() < screenHeight - (150 + screenHeight / 15)+25) 
        && (35< GetMouseX())
        && (GetMouseX()< 1000)){
        
        startColor = GREEN;
        if(IsMouseButtonDown(MOUSE_BUTTON_LEFT)){
            //continue to start menu
            startColor = BLUE;
            draw();
            WaitTime(0.3);
            current_window = 1;
            return 1;
        }
    }
    else{
        startColor = RED;
    }
    
    if((screenHeight - (150 + screenHeight / 15)+25 < GetMouseY())
        && (GetMouseY() < screenHeight) 
        && (35< GetMouseX())
        && (GetMouseX()< 1000)){
        
        instructionsColor = GREEN;
        if(IsMouseButtonDown(MOUSE_BUTTON_LEFT)){
            //continue to Instructions Screen
            instructionsColor = BLUE;
            draw();
            WaitTime(0.3);
            current_window = 9;
            return 1;
        }
    } else {
        instructionsColor = RED;
    }
        
     return 1;
}