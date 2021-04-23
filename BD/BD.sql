USE [bdb]
GO
/****** Object:  Table [dbo].[Business]    Script Date: 23.04.2021 22:56:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Business](
	[IDB] [bigint] IDENTITY(1,1) NOT NULL,
	[NameBusiness] [nchar](50) NOT NULL,
	[Timezone] [nchar](10) NOT NULL,
 CONSTRAINT [PK_Business] PRIMARY KEY CLUSTERED 
(
	[IDB] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BusinessDay]    Script Date: 23.04.2021 22:56:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BusinessDay](
	[IdDayBusiness] [bigint] IDENTITY(1,1) NOT NULL,
	[IdDay] [int] NOT NULL,
	[Availability] [bit] NOT NULL,
	[StartTime] [int] NULL,
	[EndTime] [int] NULL,
	[IdBusiness] [bigint] NOT NULL,
 CONSTRAINT [PK_BusinessDay] PRIMARY KEY CLUSTERED 
(
	[IdDayBusiness] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Business] ON 
GO
INSERT [dbo].[Business] ([IDB], [NameBusiness], [Timezone]) VALUES (1, N'Bogdan                                            ', N'GMT+1     ')
GO
INSERT [dbo].[Business] ([IDB], [NameBusiness], [Timezone]) VALUES (2, N'Andrei                                            ', N'GMT+2     ')
GO
SET IDENTITY_INSERT [dbo].[Business] OFF
GO
SET IDENTITY_INSERT [dbo].[BusinessDay] ON 
GO
INSERT [dbo].[BusinessDay] ([IdDayBusiness], [IdDay], [Availability], [StartTime], [EndTime], [IdBusiness]) VALUES (2, 1, 1, 830, 1030, 1)
GO
INSERT [dbo].[BusinessDay] ([IdDayBusiness], [IdDay], [Availability], [StartTime], [EndTime], [IdBusiness]) VALUES (3, 3, 1, 830, 1800, 1)
GO
SET IDENTITY_INSERT [dbo].[BusinessDay] OFF
GO
ALTER TABLE [dbo].[BusinessDay]  WITH CHECK ADD  CONSTRAINT [FK_BusinessDay_Business] FOREIGN KEY([IdBusiness])
REFERENCES [dbo].[Business] ([IDB])
GO
ALTER TABLE [dbo].[BusinessDay] CHECK CONSTRAINT [FK_BusinessDay_Business]
GO
