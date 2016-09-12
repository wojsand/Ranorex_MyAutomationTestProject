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

namespace IteraPlanTests.Web
{
#pragma warning disable 0436 //(CS0436) The type 'type' in 'assembly' conflicts with the imported type 'type2' in 'assembly'. Using the type defined in 'assembly'.
    /// <summary>
    ///The SwitchToInteractiveClient recording.
    /// </summary>
    [TestModule("8b730e88-850b-455b-96ef-57af528a570e", ModuleType.Recording, 1)]
    public partial class SwitchToInteractiveClient : ITestModule
    {
        /// <summary>
        /// Holds an instance of the SwitchToInteractiveClientRepository repository.
        /// </summary>
        public static SwitchToInteractiveClientRepository repo = SwitchToInteractiveClientRepository.Instance;

        static SwitchToInteractiveClient instance = new SwitchToInteractiveClient();

        /// <summary>
        /// Constructs a new instance.
        /// </summary>
        public SwitchToInteractiveClient()
        {
        }

        /// <summary>
        /// Gets a static instance of this recording.
        /// </summary>
        public static SwitchToInteractiveClient Instance
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
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.SwitchToInteractiveClient' at 39;10.", repo.WelcomeIteraplan.SwitchToInteractiveClientInfo, new RecordItemIndex(1));
            repo.WelcomeIteraplan.SwitchToInteractiveClient.Click("39;10");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.IpDataTiles' at 1293;1.", repo.WelcomeIteraplan.IpDataTilesInfo, new RecordItemIndex(2));
            repo.WelcomeIteraplan.IpDataTiles.Click("1293;1");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.HttpLocalhost8080IteraplanClientH1' at 108;44.", repo.WelcomeIteraplan.HttpLocalhost8080IteraplanClientH1Info, new RecordItemIndex(3));
            repo.WelcomeIteraplan.HttpLocalhost8080IteraplanClientH1.Click("108;44");
            Delay.Milliseconds(0);
            
            Report.Log(ReportLevel.Info, "Validation", "Validating Exists on item 'WelcomeIteraplan.GreenIT1'.", repo.WelcomeIteraplan.GreenIT1Info, new RecordItemIndex(4));
            Validate.Exists(repo.WelcomeIteraplan.GreenIT1Info);
            Delay.Milliseconds(100);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.ShowInClassicClient' at 58;12.", repo.WelcomeIteraplan.ShowInClassicClientInfo, new RecordItemIndex(5));
            repo.WelcomeIteraplan.ShowInClassicClient.Click("58;12");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplan.IteraplanHeaderImage1' at 114;14.", repo.WelcomeIteraplan.IteraplanHeaderImage1Info, new RecordItemIndex(6));
            repo.WelcomeIteraplan.IteraplanHeaderImage1.Click("114;14");
            Delay.Milliseconds(200);
            
            Report.Log(ReportLevel.Info, "Mouse", "Mouse Left Click item 'WelcomeIteraplanGoogleChrome.Client' at 1890;10.", repo.WelcomeIteraplanGoogleChrome.ClientInfo, new RecordItemIndex(7));
            repo.WelcomeIteraplanGoogleChrome.Client.Click("1890;10");
            Delay.Milliseconds(200);
            
        }

#region Image Feature Data
#endregion
    }
#pragma warning restore 0436
}
