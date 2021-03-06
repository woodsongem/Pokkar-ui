import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SetupComponent } from "./setup/setup.component";
import { GameComponent } from "./setup/game/game.component";
import { StorypointComponent } from "./setup/storypoint/storypoint.component";
import { MaterialModule } from "./material.module";
import { PlayComponent } from "./play/play.component";
import { PlayerhomeComponent } from "./playerhome/playerhome.component";
import { FormatPointPipe } from "./format-point.pipe";
import { GamehomeComponent } from "./gamehome/gamehome.component";

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    GameComponent,
    StorypointComponent,
    PlayComponent,
    PlayerhomeComponent,
    FormatPointPipe,
    GamehomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, FlexLayoutModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
