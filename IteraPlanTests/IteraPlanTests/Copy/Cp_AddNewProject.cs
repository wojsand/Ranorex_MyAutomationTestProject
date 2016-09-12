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

namespace IteraPlanTests.Copy
{
#pragma warning disable 0436 //(CS0436) The type 'type' in 'assembly' conflicts with the imported type 'type2' in 'assembly'. Using the type defined in 'assembly'.
    /// <summary>
    ///The Cp_AddNewProject recording.
    /// </summary>
    [TestModule("f5d0ece0-d6fe-41d8-916f-c69f199ccdcc", ModuleType.Recording, 1)]
    public partial class Cp_AddNewProject : ITestModule
    {
        /// <summary>
        /// Holds an instance of the IteraPlanTests.IteraPlanTestsRepository repository.
        /// </summary>
        public static IteraPlanTests.IteraPlanTestsRepository repo = IteraPlanTests.IteraPlanTestsRepository.Instance;

        static Cp_AddNewProject instance = new Cp_AddNewProject();

        /// <summary>
        /// Constructs a new instance.
        /// </summary>
        public Cp_AddNewProject()
        {
        }

        /// <summary>
        /// Gets a static instance of this recording.
        /// </summary>
        public static Cp_AddNewProject Instance
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

            Report.Log(ReportLevel.Info, "Website", "Opening web site 'http://localhost:8080/iteraplan' with browser 'chrome' in normal mode.", new RecordItemIndex(0));
            Host.Local.OpenBrowser("http://localhost:8080/iteraplan", "chrome", "", false, false, false, false, false);
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.Project' at 76;65.", repo.WelcomeIteraplan.ProjectInfo, new RecordItemIndex(1));
            repo.WelcomeIteraplan.Project.Click("76;65");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.SpanTagCreateNewProject' at 28;6.", repo.WelcomeIteraplan.SpanTagCreateNewProjectInfo, new RecordItemIndex(2));
            repo.WelcomeIteraplan.SpanTagCreateNewProject.Click("28;6");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.NameField' at 31;15.", repo.WelcomeIteraplan.NameFieldInfo, new RecordItemIndex(3));
            repo.WelcomeIteraplan.NameField.Click("31;15");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence '{LShiftKey down}M{LShiftKey up}y{LShiftKey down}N{LShiftKey up}ew{LShiftKey down}P{LShiftKey up}roject' with focus on 'WelcomeIteraplan.NameField'.", repo.WelcomeIteraplan.NameFieldInfo, new RecordItemIndex(4));
            repo.WelcomeIteraplan.NameField.PressKeys("{LShiftKey down}M{LShiftKey up}y{LShiftKey down}N{LShiftKey up}ew{LShiftKey down}P{LShiftKey up}roject");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.DescriptionTextarea' at 41;12.", repo.WelcomeIteraplan.DescriptionTextareaInfo, new RecordItemIndex(5));
            repo.WelcomeIteraplan.DescriptionTextarea.Click("41;12");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Keyboard", "Key sequence '{LShiftKey down}A{LShiftKey up}ny{Space}description' with focus on 'WelcomeIteraplan.DescriptionTextarea'.", repo.WelcomeIteraplan.DescriptionTextareaInfo, new RecordItemIndex(6));
            repo.WelcomeIteraplan.DescriptionTextarea.PressKeys("{LShiftKey down}A{LShiftKey up}ny{Space}description");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.PeriodStartDate' at 54;4.", repo.WelcomeIteraplan.PeriodStartDateInfo, new RecordItemIndex(7));
            repo.WelcomeIteraplan.PeriodStartDate.Click("54;4");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.TableTagTableCondensed.SomeThTag' at 13;10.", repo.WelcomeIteraplan.TableTagTableCondensed.SomeThTagInfo, new RecordItemIndex(8));
            repo.WelcomeIteraplan.TableTagTableCondensed.SomeThTag.Click("13;10");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.TableTagTableCondensed.TdTag3' at 9;11.", repo.WelcomeIteraplan.TableTagTableCondensed.TdTag3Info, new RecordItemIndex(9));
            repo.WelcomeIteraplan.TableTagTableCondensed.TdTag3.Click("9;11");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.PeriodEndDate' at 35;15.", repo.WelcomeIteraplan.PeriodEndDateInfo, new RecordItemIndex(10));
            repo.WelcomeIteraplan.PeriodEndDate.Click("35;15");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.TableTagTableCondensed.SomeThTag' at 11;15.", repo.WelcomeIteraplan.TableTagTableCondensed.SomeThTagInfo, new RecordItemIndex(11));
            repo.WelcomeIteraplan.TableTagTableCondensed.SomeThTag.Click("11;15");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.TableTagTableCondensed.SomeThTag' at 9;15.", repo.WelcomeIteraplan.TableTagTableCondensed.SomeThTagInfo, new RecordItemIndex(12));
            repo.WelcomeIteraplan.TableTagTableCondensed.SomeThTag.Click("9;15");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.TableTagTableCondensed.TdTag30' at 12;12.", repo.WelcomeIteraplan.TableTagTableCondensed.TdTag30Info, new RecordItemIndex(13));
            repo.WelcomeIteraplan.TableTagTableCondensed.TdTag30.Click("12;12");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.TransactionSave' at 34;13.", repo.WelcomeIteraplan.TransactionSaveInfo, new RecordItemIndex(14));
            repo.WelcomeIteraplan.TransactionSave.Click("34;13");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.IteraplanHeaderImage' at 79;18.", repo.WelcomeIteraplan.IteraplanHeaderImageInfo, new RecordItemIndex(15));
            repo.WelcomeIteraplan.IteraplanHeaderImage.Click("79;18");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplanGoogleChrome.Client' at 1894;8.", repo.WelcomeIteraplanGoogleChrome.ClientInfo, new RecordItemIndex(16));
            repo.WelcomeIteraplanGoogleChrome.Client.Click("1894;8");
            Delay.Milliseconds(200);
            
        }

#region Image Feature Data
#endregion
    }
#pragma warning restore 0436
}
