/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${nextbutton}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getComposition().getStage().nextPhoto();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var imgCount = 0;
         
         
         
         
         
         sym.nextPhoto = function ()
         {
         	imgCount = imgCount + 1;
         	sym.$("HierarchicalVoxelFields"+imgCount).show ();
         	if (imgCount == 13)
         	{
         		sym.$("HierarchicalVoxelFields10").hide ();
         		sym.$("HierarchicalVoxelFields9").hide ();
         		sym.$("HierarchicalVoxelFields8").hide ();
         		sym.$("HierarchicalVoxelFields7").hide ();
         		sym.$("HierarchicalVoxelFields5").hide ();
         		sym.$("HierarchicalVoxelFields4").hide ();
         	}
         	if (imgCount == 15)
         	{
         		sym.$("HierarchicalVoxelFields3").hide ();
         	}
         	if (imgCount == 16)
         	{
         		sym.$("HierarchicalVoxelFields15").hide ();
         	}
         	if (imgCount == 17)
         	{
         		sym.$("HierarchicalVoxelFields14").hide ();
         	}
         	if (imgCount == 18)
         	{
         		sym.$("HierarchicalVoxelFields13").hide ();
         	}
         
         	sym.$("varText").html(imgCount);
         }
         
         sym.backPhoto = function ()
         {
         	sym.$("HierarchicalVoxelFields"+imgCount).hide ();
         	imgCount = imgCount - 1;
         	if (imgCount == 12)
         	{
         		sym.$("HierarchicalVoxelFields10").show ();
         		sym.$("HierarchicalVoxelFields9").show ();
         		sym.$("HierarchicalVoxelFields8").show ();
         		sym.$("HierarchicalVoxelFields7").show ();
         		sym.$("HierarchicalVoxelFields5").show ();
         		sym.$("HierarchicalVoxelFields4").show ();
         	}
         	if (imgCount == 14)
         	{
         		sym.$("HierarchicalVoxelFields3").show ();
         		sym.$("HierarchicalVoxelFields14").show ();
         	}
         	if (imgCount >= 15)
         	{
         		sym.$("HierarchicalVoxelFields16").hide ();
         		sym.$("HierarchicalVoxelFields17").hide ();
         		sym.$("HierarchicalVoxelFields18").hide ();
         		sym.$("HierarchicalVoxelFields19").hide ();
         		sym.$("HierarchicalVoxelFields15").show ();
         		sym.$("HierarchicalVoxelFields14").show ();
         		sym.$("HierarchicalVoxelFields13").show ();
         
         		imgCount = 15;
         	}
         
         
         
         
         	sym.$("varText").html(imgCount);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${backbutton}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getComposition().getStage().backPhoto();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         // insert code to be run when the user presses a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 32 = space
             if (e.which == 65)
             {   
         		sym.backPhoto ();
             }
             // right arrow
             if (e.which == 68)
             {
                 sym.nextPhoto ();
             }   

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3489513");