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
using System.Drawing;
using Ranorex;
using Ranorex.Core;
using Ranorex.Core.Repository;
using Ranorex.Core.Testing;

namespace IteraPlanTests.Web
{
#pragma warning disable 0436 //(CS0436) The type 'type' in 'assembly' conflicts with the imported type 'type2' in 'assembly'. Using the type defined in 'assembly'.
    /// <summary>
    /// The class representing the RepositoryForNewSystem element repository.
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("Ranorex", "6.0")]
    [RepositoryFolder("78cbf678-4d23-4d8c-9a63-6a7e659735bb")]
    public partial class RepositoryForNewSystem : RepoGenBaseFolder
    {
        static RepositoryForNewSystem instance = new RepositoryForNewSystem();
        RepositoryForNewSystemFolders.IteraplanHomeAppFolder _iteraplanhome;

        /// <summary>
        /// Gets the singleton class instance representing the RepositoryForNewSystem element repository.
        /// </summary>
        [RepositoryFolder("78cbf678-4d23-4d8c-9a63-6a7e659735bb")]
        public static RepositoryForNewSystem Instance
        {
            get { return instance; }
        }

        /// <summary>
        /// Repository class constructor.
        /// </summary>
        public RepositoryForNewSystem() 
            : base("RepositoryForNewSystem", "/", null, 0, false, "78cbf678-4d23-4d8c-9a63-6a7e659735bb", ".\\RepositoryImages\\RepositoryForNewSystem78cbf678.rximgres")
        {
            _iteraplanhome = new RepositoryForNewSystemFolders.IteraplanHomeAppFolder(this);
        }

#region Variables

#endregion

        /// <summary>
        /// The Self item info.
        /// </summary>
        [RepositoryItemInfo("78cbf678-4d23-4d8c-9a63-6a7e659735bb")]
        public virtual RepoItemInfo SelfInfo
        {
            get
            {
                return _selfInfo;
            }
        }

        /// <summary>
        /// The IteraplanHome folder.
        /// </summary>
        [RepositoryFolder("4ba305a0-b6d3-47e7-9165-7ffe148ae0d0")]
        public virtual RepositoryForNewSystemFolders.IteraplanHomeAppFolder IteraplanHome
        {
            get { return _iteraplanhome; }
        }
    }

    /// <summary>
    /// Inner folder classes.
    /// </summary>
    [System.CodeDom.Compiler.GeneratedCode("Ranorex", "6.0")]
    public partial class RepositoryForNewSystemFolders
    {
        /// <summary>
        /// The IteraplanHomeAppFolder folder.
        /// </summary>
        [RepositoryFolder("4ba305a0-b6d3-47e7-9165-7ffe148ae0d0")]
        public partial class IteraplanHomeAppFolder : RepoGenBaseFolder
        {
            RepoItemInfo _ipdatatilesInfo;
            RepoItemInfo _containerfluidInfo;
            RepoItemInfo _mdgridlistInfo;
            RepoItemInfo _httplocalhost8080iteraplanclienthInfo;
            RepoItemInfo _agbodyviewportInfo;
            RepoItemInfo _migrationdbInfo;

            /// <summary>
            /// Creates a new IteraplanHome  folder.
            /// </summary>
            public IteraplanHomeAppFolder(RepoGenBaseFolder parentFolder) :
                    base("IteraplanHome", "/dom[@domain='localhost:8080']", parentFolder, 30000, null, false, "4ba305a0-b6d3-47e7-9165-7ffe148ae0d0", "")
            {
                _ipdatatilesInfo = new RepoItemInfo(this, "IpDataTiles", ".//tag[#'tab-content-0']/?/?/tag[@tagname='ip-data-tiles']", 30000, null, "703b1932-bf71-4d5c-b1ad-df62731126e5");
                _containerfluidInfo = new RepoItemInfo(this, "ContainerFluid", "body/div", 30000, null, "2f927beb-10f7-409b-8a27-565224400096");
                _mdgridlistInfo = new RepoItemInfo(this, "MdGridList", ".//tag[#'tab-content-0']//tag[@tagname='md-grid-list']", 30000, null, "43ba5307-3ed1-403e-9c52-af06a5172965");
                _httplocalhost8080iteraplanclienthInfo = new RepoItemInfo(this, "HttpLocalhost8080IteraplanClientH", ".//tag[#'tab-content-0']//tag[@tagname='md-grid-list']/tag[10]/figure/?/?/a[@href~'^http://localhost:8080/ite']", 30000, null, "0f919b5a-2603-4499-a5a7-796cc45b755b");
                _agbodyviewportInfo = new RepoItemInfo(this, "AgBodyViewport", ".//div[#'borderLayout_eGridPanel']/div[@id='center']/div/div[4]/div[3]/div", 30000, null, "01223431-6228-489f-b60e-4ab4f636ef63");
                _migrationdbInfo = new RepoItemInfo(this, "MigrationDB", ".//div[#'borderLayout_eGridPanel']/div[@id='center']/div/div[4]/div[3]/div/div/div[5]/div[@innertext='Migration DB']", 30000, null, "00181371-6dde-4524-b77c-92934cd93f46");
            }

            /// <summary>
            /// The Self item.
            /// </summary>
            [RepositoryItem("4ba305a0-b6d3-47e7-9165-7ffe148ae0d0")]
            public virtual Ranorex.WebDocument Self
            {
                get
                {
                    return _selfInfo.CreateAdapter<Ranorex.WebDocument>(true);
                }
            }

            /// <summary>
            /// The Self item info.
            /// </summary>
            [RepositoryItemInfo("4ba305a0-b6d3-47e7-9165-7ffe148ae0d0")]
            public virtual RepoItemInfo SelfInfo
            {
                get
                {
                    return _selfInfo;
                }
            }

            /// <summary>
            /// The IpDataTiles item.
            /// </summary>
            [RepositoryItem("703b1932-bf71-4d5c-b1ad-df62731126e5")]
            public virtual Ranorex.WebElement IpDataTiles
            {
                get
                {
                    return _ipdatatilesInfo.CreateAdapter<Ranorex.WebElement>(true);
                }
            }

            /// <summary>
            /// The IpDataTiles item info.
            /// </summary>
            [RepositoryItemInfo("703b1932-bf71-4d5c-b1ad-df62731126e5")]
            public virtual RepoItemInfo IpDataTilesInfo
            {
                get
                {
                    return _ipdatatilesInfo;
                }
            }

            /// <summary>
            /// The ContainerFluid item.
            /// </summary>
            [RepositoryItem("2f927beb-10f7-409b-8a27-565224400096")]
            public virtual Ranorex.DivTag ContainerFluid
            {
                get
                {
                    return _containerfluidInfo.CreateAdapter<Ranorex.DivTag>(true);
                }
            }

            /// <summary>
            /// The ContainerFluid item info.
            /// </summary>
            [RepositoryItemInfo("2f927beb-10f7-409b-8a27-565224400096")]
            public virtual RepoItemInfo ContainerFluidInfo
            {
                get
                {
                    return _containerfluidInfo;
                }
            }

            /// <summary>
            /// The MdGridList item.
            /// </summary>
            [RepositoryItem("43ba5307-3ed1-403e-9c52-af06a5172965")]
            public virtual Ranorex.WebElement MdGridList
            {
                get
                {
                    return _mdgridlistInfo.CreateAdapter<Ranorex.WebElement>(true);
                }
            }

            /// <summary>
            /// The MdGridList item info.
            /// </summary>
            [RepositoryItemInfo("43ba5307-3ed1-403e-9c52-af06a5172965")]
            public virtual RepoItemInfo MdGridListInfo
            {
                get
                {
                    return _mdgridlistInfo;
                }
            }

            /// <summary>
            /// The HttpLocalhost8080IteraplanClientH item.
            /// </summary>
            [RepositoryItem("0f919b5a-2603-4499-a5a7-796cc45b755b")]
            public virtual Ranorex.ATag HttpLocalhost8080IteraplanClientH
            {
                get
                {
                    return _httplocalhost8080iteraplanclienthInfo.CreateAdapter<Ranorex.ATag>(true);
                }
            }

            /// <summary>
            /// The HttpLocalhost8080IteraplanClientH item info.
            /// </summary>
            [RepositoryItemInfo("0f919b5a-2603-4499-a5a7-796cc45b755b")]
            public virtual RepoItemInfo HttpLocalhost8080IteraplanClientHInfo
            {
                get
                {
                    return _httplocalhost8080iteraplanclienthInfo;
                }
            }

            /// <summary>
            /// The AgBodyViewport item.
            /// </summary>
            [RepositoryItem("01223431-6228-489f-b60e-4ab4f636ef63")]
            public virtual Ranorex.DivTag AgBodyViewport
            {
                get
                {
                    return _agbodyviewportInfo.CreateAdapter<Ranorex.DivTag>(true);
                }
            }

            /// <summary>
            /// The AgBodyViewport item info.
            /// </summary>
            [RepositoryItemInfo("01223431-6228-489f-b60e-4ab4f636ef63")]
            public virtual RepoItemInfo AgBodyViewportInfo
            {
                get
                {
                    return _agbodyviewportInfo;
                }
            }

            /// <summary>
            /// The MigrationDB item.
            /// </summary>
            [RepositoryItem("00181371-6dde-4524-b77c-92934cd93f46")]
            public virtual Ranorex.DivTag MigrationDB
            {
                get
                {
                    return _migrationdbInfo.CreateAdapter<Ranorex.DivTag>(true);
                }
            }

            /// <summary>
            /// The MigrationDB item info.
            /// </summary>
            [RepositoryItemInfo("00181371-6dde-4524-b77c-92934cd93f46")]
            public virtual RepoItemInfo MigrationDBInfo
            {
                get
                {
                    return _migrationdbInfo;
                }
            }
        }

    }
#pragma warning restore 0436
}