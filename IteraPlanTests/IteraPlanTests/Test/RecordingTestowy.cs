﻿///////////////////////////////////////////////////////////////////////////////
//
// This file was automatically generated by RANOREX.
// DO NOT MODIFY THIS FILE! It is regenerated by the designer.
// All your modifications will be lost!
// http://www.ranorex.com
//
///////////////////////////////////////////////////////////////////////////////

using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Drawing;
using System.Threading;
using WinForms = System.Windows.Forms;

using Ranorex;
using Ranorex.Core;
using Ranorex.Core.Testing;
using Ranorex.Core.Repository;

namespace IteraPlanTests.Test
{
#pragma warning disable 0436 //(CS0436) The type 'type' in 'assembly' conflicts with the imported type 'type2' in 'assembly'. Using the type defined in 'assembly'.
    /// <summary>
    ///The RecordingTestowy recording.
    /// </summary>
    [TestModule("a89b4dc1-3469-4b4c-a6e7-c5a552a146eb", ModuleType.Recording, 1)]
    public partial class RecordingTestowy : ITestModule
    {
        /// <summary>
        /// Holds an instance of the IteraPlanTests.IteraPlanTestsRepository repository.
        /// </summary>
        public static IteraPlanTests.IteraPlanTestsRepository repo = IteraPlanTests.IteraPlanTestsRepository.Instance;

        static RecordingTestowy instance = new RecordingTestowy();

        /// <summary>
        /// Constructs a new instance.
        /// </summary>
        public RecordingTestowy()
        {
        }

        /// <summary>
        /// Gets a static instance of this recording.
        /// </summary>
        public static RecordingTestowy Instance
        {
            get { return instance; }
        }

#region Variables

#endregion

        /// <summary>
        /// Starts the replay of the static recording <see cref="Instance"/>.
        /// </summary>
        [System.CodeDom.Compiler.GeneratedCode("Ranorex", "6.0")]
        public static void Start()
        {
            TestModuleRunner.Run(Instance);
        }

        /// <summary>
        /// Performs the playback of actions in this recording.
        /// </summary>
        /// <remarks>You should not call this method directly, instead pass the module
        /// instance to the <see cref="TestModuleRunner.Run(ITestModule)"/> method
        /// that will in turn invoke this method.</remarks>
        [System.CodeDom.Compiler.GeneratedCode("Ranorex", "6.0")]
        void ITestModule.Run()
        {
            Mouse.DefaultMoveTime = 300;
            Keyboard.DefaultKeyPressTime = 100;
            Delay.SpeedFactor = 1.00;

            Init();

            Report.Log(ReportLevel.Info, "Website", "Opening web site 'https://www.google.pl/' with browser 'firefox' in normal mode.", new RecordItemIndex(0));
            Host.Local.OpenBrowser("https://www.google.pl/", "firefox", "", false, false, false, false, false);
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence 'onet'.", new RecordItemIndex(1));
            Keyboard.Press("onet");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence '{Return}'.", new RecordItemIndex(2));
            Keyboard.Press("{Return}");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'OnetSzukajWGoogle.ButtonTagFZl' at 18;19.", repo.OnetSzukajWGoogle.ButtonTagFZlInfo, new RecordItemIndex(3));
            repo.OnetSzukajWGoogle.ButtonTagFZl.Click("18;19");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'OnetSzukajWGoogle.OnetPl' at 23;6.", repo.OnetSzukajWGoogle.OnetPlInfo, new RecordItemIndex(4));
            repo.OnetSzukajWGoogle.OnetPl.Click("23;6");
            Delay.Milliseconds(200);
            
        }

#region Image Feature Data
#endregion
    }
#pragma warning restore 0436
}
